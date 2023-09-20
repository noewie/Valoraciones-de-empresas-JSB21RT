import { useState } from "react";
import { getAllCompaniesService } from "../../services";
import Accordion from "../Accordion/Accordion";
import imgSrc from "/logoPerson.jpg";
import { useNavigate } from "react-router-dom";

const Searcher = ({ onSearchResult }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = await getAllCompaniesService(keyword);

      const latestRatings = {};

      data.companies.forEach((company) => {
        if (
          !(company.name in latestRatings) ||
          company.createdAt > latestRatings[company.name].createdAt
        ) {
          latestRatings[company.name] = company;
        }
      });

      const companiesFiltered = Object.values(latestRatings);
      data = companiesFiltered;

      console.log(data, "data");
      navigate("/companies");
      if (onSearchResult) {
        onSearchResult(data);
      }
    } catch (err) {
      setError("Ha ocurrido un error en tu busqueda");
    }
  };
  return (
    <>
      <Accordion imgSrc={imgSrc}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        {error && <p>{error}</p>}
      </Accordion>
    </>
  );
};

export default Searcher;

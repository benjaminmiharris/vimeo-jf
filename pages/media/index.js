import MovieCard from "@/components/MovieCard";
import PrimaryBtn from "@/components/PrimaryBtn";
import { SearchContext } from "@/context/SearchContext";
import { getMoviesAPITester } from "@/helpers/getMoviesApi";
import { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import style from "../../styles/Home.module.css";

const PostsList = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesArray, setMoviesArray] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { searchTerm } = useContext(SearchContext);

  const getApiDataFromVimeo = async (searchItem) => {
    const results = await getMoviesAPITester(currentPage, searchItem);

    setMoviesData(results.data);
    setMoviesArray(results);
  };

  useEffect(() => {
    getApiDataFromVimeo(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    getApiDataFromVimeo();
  }, [currentPage]);

  useEffect(() => {
    renderMovieDataResults();
    paginator();
  }, [moviesData]);

  const paginator = () => {
    if (moviesArray.per_page < moviesArray.total) {
      const pages = moviesArray.total / moviesArray.per_page;
      setNumberOfPages(Math.round(pages));
    } else {
      setNumberOfPages(0);
    }
  };

  const nextPageInScrollerHander = () => {
    if (moviesArray.page < numberOfPages) {
      const page = moviesArray.page + 1;
      setCurrentPage(page);
    }
  };

  const backPageInScrollerHander = () => {
    if (moviesArray.page > 1) {
      const page = currentPage - 1;
      setCurrentPage(page);
    }
  };

  const renderMovieDataResults = () => {
    return (
      <>
        {moviesData.map((movie) => {
          return <MovieCard key={movie.uri} movieObject={movie} />;
        })}
      </>
    );
  };

  return (
    <div className={style.resultsContainer}>
      {moviesData.length === 0 && <Spinner animation="grow" variant="info" />}

      {moviesData && renderMovieDataResults()}
      {numberOfPages > 1 ? (
        <div className={style.paginationButtons}>
          {currentPage > 1 && (
            <PrimaryBtn btnText={"Back"} onClick={backPageInScrollerHander}>
              Back
            </PrimaryBtn>
          )}

          {currentPage == numberOfPages ? null : (
            <PrimaryBtn btnText={"Next"} onClick={nextPageInScrollerHander}>
              Next
            </PrimaryBtn>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default PostsList;

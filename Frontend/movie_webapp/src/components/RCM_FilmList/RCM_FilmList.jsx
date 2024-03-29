import React, { useEffect, useState } from "react";
import FilmItem from "../FilmItem/FilmItem";
import axios from "axios";
import { useParams, Link, Outlet } from "react-router-dom";
import Search from "../Search/Search";

// localStorage.setItem('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNjY2MDY4LCJpYXQiOjE2ODI1Nzk2NjgsImp0aSI6IjRmMDFmNWY0MDk4NTQxNjdiMTk0MmIyOTZjMmRlNGQzIiwidXNlcl9pZCI6MTI5OTI1fQ.RCyOks6N-puaN_lv4y_un2DoKJ-lwF5nP7O58Ew7dNI"); // sẽ set ở login
const access_token = localStorage.getItem("access");
const user_id = localStorage.getItem("user_id");


const RCM_FilmList = () => {
  const [films, setFilms] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  // const [totalItems, setTotalItems] = useState(0);
  // const [selectedFilm, setSelectedFilm] = useState(null);
  // const [selectedFilmId, setSelectedFilmId] = useState(null);
  // const { FilmId }= useParams();
  // const [filteredFilms, setFilteredFilms] = useState([]);
  
  const url = `http://localhost:8000/movie/recommender/collaborative/${user_id}`;
  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        // console.log(access_token)
        setFilms(res.data);
        // setFilteredFilms(res.data);
        // setTotalItems(res.data.length);
        // setSelectedFilmId(null);
        // console.log(totalItems)
      } catch (error) {
        console.log(error.message);
      }
    };

    getFilms();
  }, [url]);

  // const handleFilmClick = (movie) => {
  //   setSelectedFilm(movie);
  // };

  // const handleFilmClick = (id) => {
  //   setSelectedFilmId(id);
  // };

  // const handleSearchTerm = (searchTerm) => {
  //   setFilteredFilms(
  //     films.filter((film) =>
  //       film.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  //   setCurrentPage(1);
  // };

  // // const handleSearchTerm = async (searchTerm) => {
  // //   try {
  // //     let payload = {
  // //       title: searchTerm,
  // //       genres: "",
  // //     };
  // //     const res = await axios.get(
  // //       "http://localhost:8000/movie/filter/",
  // //       payload,
  // //       {
  // //         headers: {
  // //           Authorization: `Bearer ${access_token}`,
  // //         },
  // //       }
  // //     );
  // //     setFilteredFilms(res.data);
  // //   } catch (error) {
  // //     console.log(error.message);
  // //   }
  // // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const totalPages = Math.ceil(filteredFilms.length / itemsPerPage);

  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const itemsToShow = filteredFilms.slice(startIndex, endIndex);
  return (
    <div>
      <div className="object-contain mx-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 items-center justify-center">
          {films.map((film) => (
            <div key={film.id}>
              <Link
                to={`/home/${film.id}`}
                // onClick={() => handleFilmClick(film.id)}
              >
                <FilmItem filmProps={film} key={film.id} />
              </Link>
            </div>
          ))}
        </div>
        {/* <div className=" flex justify-center my-2">
          <button className="btn mx-2" onClick={handlePrevPage}>
            Previous Page{" "}
          </button>
          <h4 className="flex justify-center my-1 text-center text-black text-2xl font-bold">
            Page {currentPage}
          </h4>
          <button className="btn mx-2" onClick={handleNextPage}>
            Next Page
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default RCM_FilmList;

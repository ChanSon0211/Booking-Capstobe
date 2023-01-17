import Login from "features/Login/Login";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import ScheduleMovie from "./components/ScheduleMovie";
import { fetchBannersAction, fetchCinemaAction, fetchMoviesAction } from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // set data store banner
    dispatch(fetchBannersAction);
    // set data store danh sách phim
    dispatch(fetchMoviesAction());
    // set data store danh sách hệ thống rạp
    dispatch(fetchCinemaAction)
  }, []);

  return (
    <div>
      <HomeCarousel />
      <MovieList />
      <ScheduleMovie/>
      <Login/>
    </div>
  );

  // khi load trang home , call api
  // 1. lấy ds banner
};

export default Home;

import React, { useState, useEffect } from "react";
import Spin from "react-cssfx-loading/lib/Spin";

function Dropdown(props) {
  const [loader, setLoader] = useState(false);
  const { moviesDetail, label, onChange } = props;

  useEffect(() => {
    if (moviesDetail.length > 0) {
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [moviesDetail]);

  console.log(moviesDetail);

  return (
    <div>
      <label className="label">{label}</label>
      {loader ? (
        <div className="spin">
          <Spin color="rgb(202, 153, 17)" width="100px" height="100px" duration="3s"/>
        </div>
      ) : (
        <select name="movies" className="btn" id="movies" onChange={onChange}>
          <option value="Select star warz movies">Select star warz movies</option>
          {moviesDetail &&
            moviesDetail.map((movie) => (
              <option key={movie.episode_id} value={movie.title}>
                {movie.title.toUpperCase()}
              </option>
            ))}
        </select>
      )}
    </div>
  );
}

export default Dropdown;

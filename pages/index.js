import React from "react";
import ReactDOM from "react-dom";
import { MovieCard } from "../components/MovieCard";

let movieOne = {
    title: "narnia",
    desc: "kids go in the wardrobe weird & shit happens",
    duration: "too long to watch",
    imgURL: "https://picsum.photos/200/300",
};
let movieTwo = {
    title: "not narnia",
    desc: "kids go in the wardrobe weird & shit happens",
    duration: "too long to watch",
    imgURL: "https://picsum.photos/200/300",
};
let movieThree = {
    title: "not not narnia",
    desc: "kids go in the wardrobe weird & shit happens",
    duration: "too long to watch",
    imgURL: "https://picsum.photos/200/300",
};

export function MakeMovieBox() {
    return (
        <>
            <div className="movieCardContainer">
                <MovieCard movie={movieOne} />
                <MovieCard movie={movieTwo} />
                <MovieCard movie={movieThree} />
                <MovieCard movie={movieOne} />
                <MovieCard movie={movieTwo} />
                <MovieCard movie={movieThree} />
                <MovieCard movie={movieOne} />
                <MovieCard movie={movieTwo} />
                <MovieCard movie={movieThree} />
            </div>

            <style jsx>
                {`
                    .movieCardContainer {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        height: auto;
                        background-color: black;
                        gap: 12px;
                        flex-wrap: wrap;
                    }
                `}
            </style>
        </>
    );
}

export default function Home() {
    return (
        <>
            <MakeMovieBox />
        </>
    );
}

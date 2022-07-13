export function MovieCard({ movie }) {
    return (
        <>
            <div className="movieCard">
                <img className="movieImg" src={movie.imgURL}></img>
                <h1 className="movieTitle">{movie.title}</h1>
                <p>{movie.desc}</p>
                <p>{movie.duration}</p>
            </div>
            <style jsx>
                {`
                    .movieCard {
                        display: flex;
                        flex-direction: column;
                        width: 200px;
                        height: 300px;
                        background-color: aqua;
                    }
                    .movieTitle {
                        background-color: green;
                        padding: 0;
                        margin: 0;
                    }
                    .movieImg {
                        width: 200px;
                        height: 200px;
                        padding: 0;
                        margin: 0;
                    }
                    p {
                        padding: 0;
                        margin: 0;
                    }
                `}
            </style>
        </>
    );
}

export function MakeMovieBox() {
    return (
        <>
            <div className="movieCardContainer">
                <MovieCard movie={movieOne} />
                <MovieCard movie={movieTwo} />
                <MovieCard movie={movieThree} />
            </div>
            <div className="employeeCardContainer">
                {employeeDB.map((d) => (
                    <EmployeeCard employee={d} />
                ))}
            </div>

            <style jsx>
                {`
                    .movieCardContainer {
                        display: flex;
                        flex-direction: row;
                        width: 80%;
                        margin: 0;
                        padding: 8px;
                        height: auto;
                        gap: 12px;
                        flex-wrap: wrap;
                    }
                    .employeeCardContainer {
                        display: flex;
                        flex-direction: row;
                        width: 80%;
                        margin: 0;
                        padding: 8px;
                        height: auto;
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

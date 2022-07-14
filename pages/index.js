import { MovieCard } from "../components/MovieCard";
import { EmployeeCard } from "../components/EmployeeCard";

let movieOne = {
    title: "narnia",
    desc: "kids go in the wardrobe  & weird shit happens",
    duration: 140,
    imgURL: "https://picsum.photos/200/300",
};
let movieTwo = {
    title: "not narnia",
    desc: "kids go in the wardrobe  & weird shit happens",
    duration: 140,
    imgURL: "https://picsum.photos/200/300",
};
let movieThree = {
    title: "not not narnia",
    desc: "kids go in the wardrobe  & weird shit happens",
    duration: 140,
    imgURL: "https://picsum.photos/200/300",
};

class Employee {
    constructor(name, title, imgURL, socialMedia) {
        this.name = name;
        this.title = title;
        this.imgURL = imgURL;
        this.socialMedia = socialMedia;
    }
}

let empOne = new Employee("0001 Adam", "CEO", "https://bit.ly/3yEeVq2", true);
let empTwo = new Employee("0002 Eve", "CTO", "https://bit.ly/3yEeVq2", false);
let empThree = new Employee(
    "0003 Snake",
    "CFO",
    "https://bit.ly/3yEeVq2",
    false
);
let empFour = new Employee(
    "9001 Goku",
    "Intern",
    "https://bit.ly/3yEeVq2",
    true
);

let employeeDB = [empOne, empTwo, empThree, empFour];

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

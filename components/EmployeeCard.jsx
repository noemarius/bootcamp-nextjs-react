import { useEffect, useState } from 'react';
import { FaTwitter, FaLinkedin} from 'react-icons/fa';
export function EmployeeCard({ employee }) {
    let [getterSOCIAL,setterSOCIAL] = useState(employee.socialMedia)
    return (
        <>
            <div className="employeeCard">
                <img className="employeeImg" src={employee.imgURL}></img>
                <div className="employeeInfoDiv">
                    <h1 className="employeeName">{employee.name}</h1>
                    <p className="employeeTitle">{employee.title}</p>
                    {(getterSOCIAL === true ? <>
                    <div className="employeeLinksDiv">
                        <a className="employeeTwitter"><FaTwitter /></a>
                        <a className="employeeLinkedin"><FaLinkedin /></a>
                    </div>
                    </> : null )}
                    
                </div>
                
            </div>
            <style jsx>
                {`
                    .employeeCard {
                        display: flex;
                        flex-direction: column;
                        width: 200px;
                        height: auto;
                        border-radius: 5px;
                        overflow: hidden;
                        padding: 1px;
                    }
                    .employeeInfoDiv{
                        display:flex;
                        flex-direction:row;
                        flex-wrap:wrap;
                        gap:10px;
                    }
                    
                    .employeeName {
                        flex: 0 0 100%;
                        padding:10px 0;
                        order:0;
                    }

                    .employeeImg {
                        border-radius:42.5%;
                        width: 200px;
                        height: 200px;
                    }
                    .employeeDescription {
                        color: white;
                        flex: 0 0 80%;
                        order:0;
                    }

                    .employeeTitle {
                        flex:0 0 100%;
                        color: Black;
                        font-weight: 300;
                        order:1;
                    }
                    .employeeLinksDiv{
                        order:2;
                        flex: 0 0 100%;
                        display:flex;
                        flex-direction:row;
                        justify-content:flex-start;
                        gap:5px;
                    }
                    .employeeTwitter{
                        {/* width: 20px;
                        height:20px;
                        border-radius:50%;
                        align-self:flex-start; */}
                    }
                    .employeeLinkedin{
                        {/* width: 20px;
                        height:20px;
                        border-radius:50%;
                        align-self:flex-start; */}
                    }
                    p{color:white}
                    a{ba}
                `}
            </style>
        </>
    );
}

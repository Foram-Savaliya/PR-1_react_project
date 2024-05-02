import { Component } from "react";

class ShowData extends Component {

    constructor(props) {
        console.log(props);
        super();
        this.state = {
            alldata: props.userlist,
        }
    }

    render() {
        return (
            <div className="container py-5">
                <table class="table table-danger table-striped" border="4" >
                    <thead>
                        <tr>
                            <th scope="col">GR ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Course</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.alldata.map((val) => {
                                return (
                                    <tr key={val.grid}>
                                        <th scope="row">{val.grid}</th>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            {
                                                val.course.map((item) => {
                                                    return(
                                                        <div>{item}</div>
                                                    )
                                                })
                                            }
                                        </td>
                                        <td>{val.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ShowData;
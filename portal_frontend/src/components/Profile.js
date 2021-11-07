import React from "react";

const Profile = ({ user }) => {
    return (
        <div>
            <section>
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="Scriptcontent">

                            <div class="student-profile py-4">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="card shadow-sm">
                                                <div class="card-header bg-transparent text-center">
                                                    <img class="profile_img" src="https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=" alt="student dp"></img>
                                                    <h3>{user.name}</h3>
                                                </div>
                                                <div class="card-body">
                                                    <p class="mb-0"><strong class="pr-1">ENROLLMENT NO:</strong>huihui</p>
                                                    <p class="mb-0"><strong class="pr-1">BRANCH:</strong>Computer Science</p>
                                                    <p class="mb-0"><strong class="pr-1">SUB-BATCH:</strong>O4</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="card shadow-sm">
                                                <div class="card-header bg-transparent border-0">
                                                    <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
                                                </div>
                                                <div class="card-body pt-0">
                                                    <table class="table table-bordered">
                                                        <tr>
                                                            <th width="30%">Name</th>
                                                            <td width="2%">:</td>
                                                            <td>{user.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Batch of</th>
                                                            <td width="2%">:</td>
                                                            <td>2024</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Username</th>
                                                            <td width="2%">:</td>
                                                            <td>{user.username}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Profession</th>
                                                            <td width="2%">:</td>
                                                            <td>{user.profession[0]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th width="30%">Email-id</th>
                                                            <td width="2%">:</td>
                                                            <td>{user.email}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div style={{height: '26px'}}></div>
                                            <div class="card shadow-sm">
                                                <div class="card-header bg-transparent border-0">
                                                    <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Other Information</h3>
                                                </div>
                                                <div class="card-body pt-0">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}

export default Profile
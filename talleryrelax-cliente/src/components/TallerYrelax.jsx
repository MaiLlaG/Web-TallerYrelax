import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';

const TallerYrelax = () => {


    return (
        <>
            <main>
                <div>
                    <img className="img-clientes w-100" src={require("../img/fondo-TallerYrelaxT.jpg")} />
                </div>
                <section className="py-3 text-center bg-white">
                    <div className="py-lg-3">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h5 className="text-dark letter-spacing-2 mb-3">Te esperan un montón de actividades creativas y relajantes, no te las pierdas.</h5>
                            <h5 className="text-dark letter-spacing-2">En <span className="fw-bold">Talleres</span> podrás encontrar información detallada de cada taller.</h5>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-arena">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/jabones12.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Jabones artesanales</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/kintsugi11.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">kintsugi</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Acuarela32.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Acuarela botánica</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Acuarela13.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Acuarela</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Velas21.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Velas de soja</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Esculturasdepapel14.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Esculturas de papel</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/kintsugi22.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">kintsugi</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/lettering15.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Lettering ornamental</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/tallerPanaderia48.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Bakery</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Shodo3.jpg")} />
                                    <div className="card-body border-top-card border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Shodo</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Esculturasdepapel27.jpg")} />
                                    {/*<div className="info-center">
                                        kintsugi
                                    </div>*/}
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Esculturas de papel</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Origami39.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Origami</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Acuarela31.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Acuarela botánica</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/kintsugi16.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">kintsugi</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/tallerPanaderia76.jpg")} />
                                    <div className="card-body border-top-card border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Bakery</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/telar6.jpg")} />
                                    <div className="card-body border-top-card border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Telar</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/lettering14.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Lettering ornamental</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Origami37.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Origami</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/librospopup11.jpg")} />
                                    <div className="card-body border-top-card border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Libros pop-up</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/velas23.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Velas de soja</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="img-clientes" src={require("../img/Acuarela8.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Acuarela</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <div className="d-flex flex-column justify-content-center">
                                                    <Link
                                                        to={"/talleres/"} className="btn bg-transparent rounded-0 p-2 mt-2 mb-2 mx-3">
                                                        <span className="text-primary fs-6 letter-spacing-2">Ver en Talleres</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )

};

export default TallerYrelax;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/TallerYrelax.css';

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
                            <h3 className="text-dark letter-spacing-2">TallerYrelax Home</h3>
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
                                    <img className="img-clientes" src={require("../img/Esculturasdepapel27.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Paper</p>
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
                                    <img className="img-clientes" src={require("../img/Acuarela18.jpg")} />
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
                                    <img className="img-clientes" src={require("../img/Shodo5.jpg")} />
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
                                    <img className="img-clientes" src={require("../img/kintsugi11.jpg")} />
                                    {/*<div className="info-center">
                                        kintsugi
                                    </div>*/}
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
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Baker</p>
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
                                    <img className="img-clientes" src={require("../img/tallerPanaderia48.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
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
                                    <img className="img-clientes" src={require("../img/lettering9.jpg")} />
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
                                    <img className="img-clientes" src={require("../img/kintsugi21.jpg")} />
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
                                    <img className="img-clientes" src={require("../img/telarfoto.png")} />
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
                                    <img className="img-clientes" src={require("../img/Origami4.png")} />
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
                                    <img className="img-clientes" src={require("../img/librospopup1.jpg")} />
                                    <div className="card-body border-top-card d-flex flex-column align-items-center">
                                        <p className="card-text fs-5 fw-bold letter-spacing-2">Libros Pop up</p>
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
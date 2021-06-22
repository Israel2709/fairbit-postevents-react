import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import './style.scss'
import firebase from '../../lib/firebase'
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardText,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'

const IdcSponsors = (props) => {
    const [sponsorsList, setSponsorsList] = useState(null)
    const [userData, setuserData] = useState({})
    const [isRegistered, setIsRegistered] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = data => {
        setIsRegistered(true)
        setTimeout(function () {
            toggle()
        }, 1000)
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleUserData = event => {
        let property = event.target.name
        let value = event.target.value
        setuserData({ ...userData, [property]: value })
    }

    const { sponsors, type } = props
    console.log( sponsors )

    const iconClasses = {
        "facebook":"fab fa-facebook-square mx-2 text-main-color",
        "twitter":"fab fa-twitter-square mx-2 text-main-color",
        "linkedin":"fab fa-linkedin mx-2 text-main-color",
        "web":"fas fa-globe mx-2 text-main-color"
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-header border-0">
                    <h2 className="modal-title text-uppercase text-center mx-auto">Ingrese los campos del siguiente formulario</h2>
                    <button type="button" className="close bg-transparent border-0" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <ModalBody>
                    {
                        !isRegistered ? (
                            <form onSubmit={handleSubmit(onSubmit)} className="w-100 d-block mx-auto">
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-main-color text-white">Nombre Completo:</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Martín"
                                        name="name"
                                        {...register("name", {
                                            required: "Este campo es requerido.",
                                        })}
                                    />
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="name"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className="text-danger">{message}</p>
                                            ))
                                            : null;
                                    }}
                                />
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text  bg-main-color text-white">Empresa:</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="MartinEnterprise"
                                        name="job"
                                        {...register("job", {
                                            required: "Este campo es requerido.",
                                        })}
                                    />
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="job"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className="text-danger">{message}</p>
                                            ))
                                            : null;
                                    }}
                                />
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend ">
                                        <div className="input-group-text bg-main-color text-white">Correo :</div>
                                    </div>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="martín@ejemplo.com"
                                        {...register("email", {
                                            required: "Este campo es requerido.",
                                        })} />
                                </div>
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ messages }) => {
                                        console.log("messages", messages);
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className="text-danger">{message}</p>
                                            ))
                                            : null;
                                    }}
                                />
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend ">
                                        <div className="input-group-text bg-main-color text-white">Patrocinador :</div>
                                    </div>
                                    { sponsors[0] && <input type="text" className="form-control" id="" placeholder="" value={sponsors[0].name.toUpperCase()} name="text" readonly disabled />}
                                </div>


                                <Button type="button" color="outline-dark" className="d-block mx-auto my-3 rounded-pill px-5" type="submit">Registrar</Button>
                            </form>
                        ) : (
                            <div className="alert alert-success text-center" role="alert">
                                <h1>¡Gracias, tu pregunta ha sido confirmada con éxito!</h1>
                            </div>
                        )
                    }
                </ModalBody>
            </Modal>
            <Container className="mt-5">
                <Row>
                    <Col xs="12" md="6" className="mb-3">
                        {/*<h2 className="text-center">&nbsp;</h2>*/}
                        <Card>
                            <CardBody className="d-flex justify-content-center align-items-center">
                                { sponsors[0] && <img src={ sponsors[0].logo } alt="" /> }
                            </CardBody>
                            {/*
                            <div class="links-wrapper">
                                <a href="">Link 1</a>
                                <a href="">Link 2</a>
                                <a href="">Link 3</a>
                            </div>
                        */}

                        </Card>
                    </Col>
                    <Col xs="12" md="6">
                        {/*<h2 className="text-center">Patrocinador Premium</h2>*/}
                        <Card>
                            <CardBody>
                                <Button className="mx-auto d-block mb-3" type="button" onClick={toggle}>Ser contactado</Button>
                                {sponsors[0] && <CardTitle tag="h3" className="text-center text-uppercase mb-3">
                                    { sponsors[0].name }
                                </CardTitle>}
                                { sponsors[0] && <CardText className="text-center mb-3">{ sponsors[0].boilerplate }</CardText>}
                                <div className="social-wrapper d-flex justify-content-center">
                                    {
                                        sponsors[0] && Object.keys(sponsors[0].links).map( link => {
                                            return <a href={sponsors[0].links[link]} target="_blank" className={iconClasses[link]}></a>
                                        })
                                    }
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default IdcSponsors;
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

import sponsorLogo from '../../assets/IDC_TRANSTELCO_PostEvento_SponsorCard.svg'

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

    useEffect(async () => {
        const database = await firebase.database();
        console.log(database)
        const sponsorsRef = database.ref('/sponsors')
        sponsorsRef.on('value', snapshot => {
            console.log(snapshot.val())
            setSponsorsList(snapshot.val())
        })
    }, [])
    const { sponsors, type } = props
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
                                    <input type="text" className="form-control" id="" placeholder="" value="TRANSTELCO" name="text" readonly disabled />
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
                                <img src='https://firebasestorage.googleapis.com/v0/b/idc-latam.appspot.com/o/events%2Fsponsors%2FIDC_TRANSTELCO_PostEvento_SponsorCard.svg?alt=media&token=fc8e74ea-bfdd-48e2-ae3f-fe54c07e9225' alt="" />
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
                                <CardTitle tag="h3" className="text-center text-uppercase mb-3">
                                    {sponsorsList ? sponsorsList['sponsor1'].name : "lorem"}
                                </CardTitle>
                                <CardText className="text-center mb-3">{sponsorsList ? sponsorsList['sponsor1'].boilerplate : "lorem"}</CardText>
                                <div className="social-wrapper d-flex justify-content-center">
                                    {/*<a href="https://www.facebook.com/IDCLatinAmerica/" target="_blank" className="fab fa-facebook-square mx-2 text-main-color"></a>*/}
                                    <a href="https://twitter.com/transtelco" target="_blank" className="fab fa-twitter-square mx-2 text-main-color"></a>
                                    <a href="https://www.linkedin.com/company/transtelco/mycompany/" target="_blank" className="fab fa-linkedin mx-2 text-main-color"></a>
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
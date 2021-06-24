import React, { useState } from 'react';
import PresentationItem from '../PresentationItem'
import './style.scss'

import {
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'

const IdcPresentations = (props) => {
    const [modal, setModal] = useState(false);
    const [userData, setuserData] = useState({})
    const [emailError, setEmailError] = useState(null)
    const [userEmail, setUserEmail] = useState("")
    const [isRegistered, setIsRegistered] = useState(false)
    const { presentations, speakersList } = props

    const toggle = () => {
        !isRegistered ? setModal(!modal) : window.open(presentations[0].document)
    }

    const handleEmail = event => {
        setEmailError(false)
        setUserEmail(event.target.value)
    }

    const handleUserData = event => {
        let property = event.target.name
        let value = event.target.value
        setuserData({...userData, [property]:value})
    }

    const submitEmail = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(userEmail)) {
            console.log(userEmail)
            setIsRegistered(true)
            setTimeout( function(){
                toggle()
                window.open(presentations[0].document)
            },1000)
            // this is a valid email address
            // call setState({email: email}) to update the email
            // or update the data in redux store.
        }
        else {
            // invalid email, maybe show an error to the user.
            setEmailError(true)
        }
    }

    const submitData = () => {
        setIsRegistered(true)
        setTimeout( function(){
            toggle()
            window.open(presentations[0].document)
        },1000)
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-header border-0">
                    <h2 className="modal-title text-uppercase text-center mx-auto">Registro</h2>
                    <button type="button" className="close bg-transparent border-0" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <ModalBody>
                    {
                        isRegistered ? (
                            <div className="alert alert-success text-center" role="alert">
                                <h1>¡Gracias, tu registro ha sido confirmado con éxito!</h1>
                            </div>
                        ) : (
                            <>
                                <p className="text-center ">Recuerde que este es un evento virtual y sólo podrá descargar todo el contenido si recibió invitación por correo electrónico.</p>
                                <p className="text-uppercase text-center m-0 mb-3"><b>Ingrese el correo al que fue invitado</b></p>
                                <form action="" className="w-75 d-block mx-auto">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0 border-bottom rounded-0 border-dark" placeholder="Correo electrónico" onChange={handleEmail} />
                                        {emailError && <div class="alert alert-danger" role="alert">
                                            Ingrese un correo válido
                                        </div>}
                                    </div>
                                    <Button type="button" color="outline-dark" className="d-block mx-auto my-3 rounded-pill px-5" onClick={submitEmail}>Ingrese</Button>
                                </form>
                                <p className="text-center ">¿No recibió una invitación? Ingrese sus datos para descargar contenido de interés</p>
                                <p className="text-center"><b className="text-uppercase">Ingrese su correo empresarial</b></p>
                                <form action="" className="w-75 d-block mx-auto">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text bg-main-color text-white">Nombre (s):</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Martín" name="name" onChange={handleUserData}/>
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text bg-main-color text-white">Apellido (s):</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Jiménez" name="lastName" onChange={handleUserData}/>
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend ">
                                            <div className="input-group-text bg-main-color text-white">Correo :</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="martín@ejemplo.com" name="email" onChange={handleUserData}/>
                                    </div>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text  bg-main-color text-white">Empresa:</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="MartinEnterprise" name="job" onChange={handleUserData}/>
                                    </div>

                                    <Button type="button" color="outline-dark" className="d-block mx-auto my-3 rounded-pill px-5" onClick={ submitData }>Registrar</Button>
                                </form>
                            </>
                        )
                    }

                </ModalBody>
            </Modal>
            <Col xs="12">
                <h2 id="presentations" className="text-center my-3">Presentaciones</h2>
                <Row className="presentations-wrapper">
                    <Col md="1"></Col>
                    {
                        (presentations && speakersList) &&
                        presentations.map(presentation => {
                            return <PresentationItem
                                presentationData={presentation}
                                speakerData={speakersList[presentation.speaker]}
                                handler={toggle}
                            />

                        })
                    }

                    <Col md="1"></Col>
                </Row>
            </Col>
        </>
    );
};

export default IdcPresentations;
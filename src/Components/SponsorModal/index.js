import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import {
    Modal,
    ModalBody,
    Button
} from 'reactstrap'

const SponsorModal = ( props ) => {
    const [isRegistered, setIsRegistered ] = useState( false )
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
    const toggle = () => props.handler();

    const { modal, handler, sponsorName } = props
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <div className="modal-header border-0">
                <h2 className="modal-title text-uppercase text-center mx-auto">INGRESE LOS CAMPOS DEL SIGUIENTE FORMULARIO</h2>
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
                                    <div className="input-group-text bg-main-color text-white">Correo:</div>
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
                                    <div className="input-group-text bg-main-color text-white">Patrocinador:</div>
                                </div>
                                <input type="text" className="form-control" id="" placeholder="" value={ sponsorName.toUpperCase() } name="text" readonly disabled />
                            </div>
                            <Button type="button" color="outline-dark" className="d-block mx-auto my-3 rounded-pill px-5" type="submit">Registrar</Button>
                        </form>
                    ) : (
                        <div className="alert alert-success text-center" role="alert">
                            <h1>¡!Gracias, tu pregunta fue confirmada con éxito!</h1>
                        </div>
                    )
                }
            </ModalBody>
        </Modal>
    )
}

export default SponsorModal

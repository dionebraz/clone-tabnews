function Status(request, response) {
    response.status(200).json({ message: "Parabéns, tudo ok por aqui" });
}

export default Status;

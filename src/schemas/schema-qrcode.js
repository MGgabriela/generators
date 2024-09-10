const qrCodeSchema = [
    {
        name: 'link',
        description: 'Digite o link para gerar o QR CODE',
    },
    {
        name: 'type',
        description: 'Escolha entre o tipo (1 - normal ou 2 - terminal)',
        pattern: /^[1-2]+$/,
        message: 'Escolha apenas entre 1 e 2',
        required: true,
    },
];

export default qrCodeSchema;
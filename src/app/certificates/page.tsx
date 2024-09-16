import React from 'react';

const CertificatesPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe
                src="/assets/files/certs.pdf" // Путь к PDF файлу
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Certificates"
            />
        </div>
    );
};

export default CertificatesPage;
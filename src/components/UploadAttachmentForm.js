import React, { useState } from 'react';
import { uploadAttachment } from '../API/issues.api';

export function UploadAttachmentForm({ issueId }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('attachment', selectedFile);

        // Realizar llamada a la API para subir el archivo
        await uploadAttachment(issueId, formData);

        // Reiniciar el estado del archivo seleccionado
        setSelectedFile(null);
      } catch (error) {
        console.error('Error al subir el archivo:', error);
      }
    }
  };

  return (
    <form className="attachment-form-wrap" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
      {/* Coloca aquí el token CSRF si es necesario */}
      <input type="file" onChange={handleFileChange} />
      <button className="btn-upload" type="submit">Upload</button>
    </form>
  );
}
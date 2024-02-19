import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ImageInputContainer, ImageLabel, Image, ImageContainer} from './styles';

const ImageInput = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length + selectedImages.length > 7)  return toast.error('você só pode adicionar no máximo 7 imagens.');

    setSelectedImages((prevImages) => [...prevImages, ...files]);
    toast.success("imagens adicionadas com sucesso")

  };

  const handleRemoveImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
    toast.success("imagem removida com sucesso")
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length + selectedImages.length > 7) return toast.error('você só pode adicionar no máximo 7 imagens.');

    setSelectedImages((prevImages) => [...prevImages, ...files]);
    toast.success("imagens adicionadas com sucesso")
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <ImageInputContainer
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <ImageLabel htmlFor="imageInput">
        Arraste e solte imagens ou clique para adicionar
      </ImageLabel>

      <input
        id="imageInput"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <ImageContainer>
        {selectedImages.map((image, index) => (
         <div key={index} onClick={() => handleRemoveImage(index) }>
             <Image src={URL.createObjectURL(image)} alt={`Imagem não carregada`} />
         </div>
        ))}
      </ImageContainer>
    </ImageInputContainer>
  );
};

export default ImageInput;

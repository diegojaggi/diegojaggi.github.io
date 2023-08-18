const imageUploadContainer = document.querySelector('.image-upload-container');

imageUploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    imageUploadContainer.classList.add('dragover');
});

imageUploadContainer.addEventListener('dragleave', () => {
    imageUploadContainer.classList.remove('dragover');
});

imageUploadContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    imageUploadContainer.classList.remove('dragover');
    const file = e.dataTransfer.files[0];

    if (file.type.startsWith('image/')) {
        const imagePreview = document.createElement('img');
        imagePreview.src = URL.createObjectURL(file);
        imagePreview.classList.add('uploaded-image-preview');
        imageUploadContainer.appendChild(imagePreview);
    }
});

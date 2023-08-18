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
    // Here you can handle the dropped file (e.g., upload it, display it, etc.)
    console.log('Dropped file:', file);
});

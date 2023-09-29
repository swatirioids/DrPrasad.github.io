
                                        document.addEventListener("DOMContentLoaded", function() {
                                        const form = document.getElementById('contact-form');
                                        const successPopup = document.getElementById('success-popup');
                                        const closePopupButton = document.getElementById('close-popup')
                                        form.addEventListener('submit', function (event) {
                                        event.preventDefault();
                                        successPopup.style.display = 'flex';
                                        form.reset();
                                        });
                                        closePopupButton.addEventListener('click', function () {
                                        // Close the success popup
                                        successPopup.style.display = 'none';
                                    });
                                    });
                                    
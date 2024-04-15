
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


document.getElementById('submitBtn').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
      $('#exampleModal').modal('show');
    }
  });

  document.getElementById('closeModalBtn').addEventListener('click', function() {
    $('#exampleModal').modal('hide');
  });

  document.getElementById('closeModalBtn2').addEventListener('click', function() {
    $('#exampleModal').modal('hide');
  });
 
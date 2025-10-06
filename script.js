       // Fonction améliorée pour toggle une expérience
        function toggleExperience(header) {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');

            if (isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.offsetHeight;
                content.style.maxHeight = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                setTimeout(() => {
                    if (content.classList.contains('active')) {
                        content.style.maxHeight = "none";
                    }
                }, 400);
            }

            header.classList.toggle('active');
            content.classList.toggle('active');
        }

        // Fonction améliorée pour toggle un sous-menu
        function toggleSubMenu(header) {
            const content = header.nextElementSibling;
            const isActive = content.classList.contains('active');

            if (isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.offsetHeight;
                content.style.maxHeight = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                setTimeout(() => {
                    if (content.classList.contains('active')) {
                        content.style.maxHeight = "none";
                    }
                }, 400);
            }

            header.classList.toggle('active');
            content.classList.toggle('active');
        }

        // Fonction pour tout développer ou tout réduire (gardez votre version existante)
        let allExpanded = false;
        function toggleAll() {
  const experienceContents = document.querySelectorAll('.experience-content');
  const experienceHeaders = document.querySelectorAll('.experience-header');
  const subContents = document.querySelectorAll('.sub-content');
  const subHeaders = document.querySelectorAll('.sub-header');
  const button = document.querySelector('.expand-all-btn');

  allExpanded = !allExpanded;

  experienceContents.forEach(content => {
    if (allExpanded) {
      content.classList.add('active');
      content.style.maxHeight = "none";
    } else {
      content.classList.remove('active');
      content.style.maxHeight = "0";
    }
  });

  experienceHeaders.forEach(header => {
    if (allExpanded) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });

  // Ouvre ou ferme tous les sous-menus !
  subContents.forEach(content => {
    if (allExpanded) {
      content.classList.add('active');
      content.style.maxHeight = "none";
    } else {
      content.classList.remove('active');
      content.style.maxHeight = "0";
    }
  });

  subHeaders.forEach(header => {
    if (allExpanded) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });

  button.textContent = allExpanded ? 'TOUT RÉDUIRE' : 'TOUT DÉVELOPPER';
}

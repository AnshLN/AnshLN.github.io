function scrollToMainPages() {
    const mainPagesSection = document.getElementById('main-pages');
    if (mainPagesSection) {
      const offset = 70; // Set the offset height
      const topPos = mainPagesSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }
  function scrollToMainContent() {
    const mainPagesSection1 = document.getElementById('main-content');
    if (mainPagesSection1) {
      const offset = 70; // Set the offset height
      const topPos = mainPagesSection1.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }
  function scrollToMainContent2() {
    const mainPagesSection2 = document.getElementById('main-content-2nd');
    if (mainPagesSection2) {
      const offset = 70; // Set the offset height
      const topPos = mainPagesSection2.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }
  function scrollToFooter() {
    const mainPagesSection3 = document.getElementById('footerr');
    if (mainPagesSection3) {
      const offset = 70; // Set the offset height
      const topPos = mainPagesSection3.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }
  function fadeOutAlert() {
    
    const alertMessage = document.getElementById('alertMessage');
    if (window.getComputedStyle(alertMessage).display === 'none')
    {
    alertMessage.style.display = 'block';
    setTimeout(() => {
        alertMessage.classList.add('fade-out');
    setTimeout(() => {
      alertMessage.style.display = 'none';
    }, 1100); 
  }, 1000);
  alertMessage.classList.remove('fade-out');
}
else{}
}
function scrollToPDF() {
    const mainPagesSection4 = document.getElementById('footerr');
    if (mainPagesSection4) {
      const offset = 70; // Set the offset height
      const topPos = mainPagesSection4.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }

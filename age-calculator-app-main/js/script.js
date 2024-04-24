document.getElementById('calculateButton').addEventListener('click', calculateAge);

    function calculateAge() {
        const dayInput = document.getElementById('dd');
        const monthInput = document.getElementById('mm');
        const yearInput = document.getElementById('yyyy');

        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);


        const yearsResult = document.getElementById('yearsResult');
        const monthsResult = document.getElementById('monthsResult');
        const daysResult = document.getElementById('daysResult');

    
        const errorMessage = document.getElementById('errorMessage');

        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        if (!dayInput.value || !monthInput.value || !yearInput.value) {
            errorMessage.textContent = 'Este campo é obrigatório';
            errorMessage.style.display = 'block';
            return;
        }

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            errorMessage.textContent = 'Deve ser uma data válida';
            errorMessage.style.display = 'block';
            return;
        }

        if (day < 1 || day > 31) {
            errorMessage.textContent = 'Deve ser um dia válido';
            errorMessage.style.display = 'block';
            return;
        }
        if (month < 1 || month > 12) {
            errorMessage.textContent = 'Deve ser um mês válido';
            errorMessage.style.display = 'block';
            return;
        }
        if (year > new Date().getFullYear()) {
            errorMessage.textContent = 'Deve estar no passado';
            errorMessage.style.display = 'block';
            return;
        }

        const birthDate = new Date(year, month - 1, day);
        const currentDate = new Date();

        if (birthDate > currentDate) {
            errorMessage.textContent = 'Deve estar no passado';
            errorMessage.style.display = 'block';
            return;
        }

        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months -= 1;
            const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            months += 12;
            years--;
        }

        yearsResult.textContent = `${years} anos`;
        monthsResult.textContent = `${months} meses`;
        daysResult.textContent = `${days} dias`;
    }
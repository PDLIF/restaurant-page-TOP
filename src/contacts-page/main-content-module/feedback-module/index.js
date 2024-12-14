import './styles.css';

export const createFeedbackSection = () => {
    const mainContent = document.getElementsByClassName('main-content');

    const feedbackSection = document.createElement('section');
    feedbackSection.className = 'feedback-section';

    const feedbackHeading = document.createElement('p');
    feedbackHeading.classList.add('h4', 'feedback-heading');
    feedbackHeading.textContent = 'Feedback';
    feedbackSection.appendChild(feedbackHeading);

    const form = document.createElement('form');
    form.action = '';

    function createFormGroup(labelText, inputType, id, name) {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', id);
        label.textContent = labelText;

        const input = document.createElement(inputType === 'textarea' ? 'textarea' : 'input');
        input.setAttribute('id', id);
        input.setAttribute('name', name);

        if (inputType === 'textarea') {
            input.setAttribute('rows', '8');
            input.required = true;
            input.placeholder = '';
        } else {
            input.setAttribute('type', inputType);
        }

        formGroup.appendChild(label);
        formGroup.appendChild(input);

        return formGroup;
    }

    form.appendChild(createFormGroup('Subject', 'text', 'subject', 'subject'));
    form.appendChild(createFormGroup('Restaurant', 'text', 'restaurant', 'restaurant'));
    form.appendChild(createFormGroup('Name', 'text', 'name', 'name'));
    form.appendChild(createFormGroup('Email', 'text', 'email', 'email'));
    form.appendChild(createFormGroup('Your Feedback', 'textarea', 'feedback', 'feedback'));

    const submitGroup = document.createElement('div');
    submitGroup.classList.add('form-group');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.classList.add('submit-btn');
    submitButton.textContent = 'SUBMIT';

    submitGroup.appendChild(submitButton);
    form.appendChild(submitGroup);

    feedbackSection.appendChild(form);

    return feedbackSection;
}
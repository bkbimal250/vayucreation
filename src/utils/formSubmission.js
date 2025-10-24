/**
 * Utility function to submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} source - The source of the form submission (e.g., 'Contact Modal', 'Contact Page', 'Contact Section')
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise
 */
export const submitToGoogleSheets = async (formData, source = 'Website Form') => {
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwle9dh9Ujm2YwSbmeCoBAOG46chZknx7_pd7lhqq9SfmAvijUmmXYTENKyL5t890wSyg/exec';
  
  try {
    // Prepare the data with timestamp and source
    const dataToSend = {
      timestamp: new Date().toISOString(),
      source: source,
      ...formData
    };

    // Method 1: JSON submission
    const jsonResponse = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    });

    // Method 2: FormData submission (backup method)
    const formDataToSend = new FormData();
    formDataToSend.append('timestamp', dataToSend.timestamp);
    formDataToSend.append('source', dataToSend.source);
    
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataToSend
    });

    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
};

/**
 * Standard form fields for all contact forms
 */
export const getStandardFormFields = () => ({
  fullName: '',
  email: '',
  mobileNumber: '',
  businessName: '',
  businessLocation: '',
  city: '',
  requirement: ''
});

/**
 * Reset form data to initial state
 */
export const resetFormData = (setFormData) => {
  setFormData(getStandardFormFields());
};

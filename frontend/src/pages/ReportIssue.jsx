import React, { Component } from 'react';

class ReportIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      type: '',
      image: null,
      location: '',
      previewImage: null,
      isSubmitting: false,
    };

    this.issueTypes = [
      { value: 'pothole', label: 'Pothole' },
      { value: 'garbage', label: 'Garbage/Trash' },
      { value: 'water_leak', label: 'Water Leak' },
      { value: 'fallen_tree', label: 'Fallen Tree' },
      { value: 'graffiti', label: 'Graffiti' },
      { value: 'broken_light', label: 'Broken Streetlight' },
      { value: 'other', label: 'Other' },
    ];
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      this.setState({
        image: file,
      });

      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({
          previewImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, type, location, image } = this.state;

    // Validate form
    if (!title.trim()) {
      alert('Please provide a title for the issue.');
      return;
    }

    if (!type) {
      alert('Please select an issue type.');
      return;
    }

    if (!location.trim()) {
      alert('Please provide a location for the issue.');
      return;
    }

    this.setState({ isSubmitting: true });

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', {
        title: this.state.title,
        description: this.state.description,
        type: this.state.type,
        location: this.state.location,
        image: image ? image.name : null, // Just logging the file name for console
      });

      alert('Your report has been submitted successfully.');

      // Reset form
      this.setState({
        title: '',
        description: '',
        type: '',
        image: null,
        location: '',
        previewImage: null,
        isSubmitting: false,
      });
    }, 1000);
  };

  render() {
    const {
      title,
      description,
      type,
      image,
      location,
      previewImage,
      isSubmitting,
    } = this.state;

    return (
      <div className="py-8 md:py-12 bg-civic-light-bg">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              Report an Issue
            </h1>
            <p className="text-gray-600 mb-8">
              Help us improve our community by reporting issues that need
              attention.
            </p>

            <form onSubmit={this.handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder="Brief title describing the issue"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-civic-purple focus:border-civic-purple"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  placeholder="Provide details about the issue..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-civic-purple focus:border-civic-purple"
                ></textarea>
              </div>

              {/* Issue Type */}
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Issue Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={type}
                  onChange={this.handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-civic-purple focus:border-civic-purple"
                >
                  <option value="">Select issue type</option>
                  {this.issueTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={this.handleImageChange}
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-civic-purple focus:border-civic-purple"
                />
                {previewImage && (
                  <div className="mt-2">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="h-40 object-contain rounded-md border border-gray-200"
                    />
                  </div>
                )}
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={this.handleChange}
                  placeholder="Enter address or describe location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-civic-purple focus:border-civic-purple"
                />
                {/* Map placeholder */}
                <div className="mt-2 h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                  Map functionality will be added later
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary px-6 py-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Report'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportIssue;

export funcition ProfileForm () {
    return (
        <form method="post" encType="multipart/form-data">
        <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
        <label htmlFor="file-upload" className="btn-select-change-avatar">
        <input
            type="file"
            id="file-upload"
            name="new_profile_picture"
            style={{ display: 'none' }}
            onChange={() => {}}
        />
        <i className="bx bx-image-alt"></i> Change
        </label>
</form>)
}
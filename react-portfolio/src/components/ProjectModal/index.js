import React from "react";

function ProjectModal({onClose, currentPhoto}) {
  const { name, category, description, index } = currentPhoto;
  console.log("Log props", onClose, name, category, description, index);

    return (
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    {/* <div class="modal-content">
      <div class="modal-header">
        <img alt={category} src={require(`../../assets/images/${category}/${index}.jpg`).default} className="modal-img-top" />
              <h5 class="modal-title">{ name }</h5>
      </div>
      <div class="modal-body">
              <p>{ description }</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={onClose}>Close</button>
      </div>
    </div> */}
  </div>
</div>
    )
};

export default ProjectModal;
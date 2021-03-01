import React from "react";
import IconDescription from './icon-description';
import IconTimer from './icon-timer';
import IconChat from './icon-chat';
import IconAttach from './icon-attach';

export default function Indicators({ task }) {
  return (
    <div className="indicators">
      {task.hasDescription && <IconDescription />}
      {task.commentsCount > 0 && <IconChat />}
      {task.filesCount > 0 && <IconAttach />}
      {task.totalTimeTracked > 0 && <IconTimer />}
      {task.customFields?.map((field, i) =>
        <div className="custom-fields" key={i}>
          <div className="custom-field custom-field-single">
            <p className="color-light has-color-tag">
              <span className="field-background" />
              <span className="field-title">{field.value}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
import React from "react";
import {Upload as AntUpload} from "antd";

class Upload extends React.Component {

    render() {

        const props = {...this.props};

        return (
            <AntUpload {...props}/>
        );
    }

}

Upload.Dragger = AntUpload.Dragger;

export default Upload;

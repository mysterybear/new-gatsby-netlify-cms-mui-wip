import { CssBaseline, jssPreset, StylesProvider } from "@material-ui/core";
import { create } from "jss";
import React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

class IndexPagePreview extends React.Component {
  state = {
    ready: false
  };

  handleRef = ref => {
    const ownerDocument = ref ? ref.ownerDocument : null;
    this.setState({
      ready: true,
      jss: create({
        ...jssPreset(),
        insertionPoint: ownerDocument ? ownerDocument.querySelector("#demo-frame-jss") : null
      }),
      sheetsManager: new Map()
    });
  };

  render() {
    const { entry } = this.props;
    const data = entry.getIn(['data']).toJS()

    if (data) {
      const { greet, testimonials } = data;
      return (
        <React.Fragment>
          <div id="demo-frame-jss" ref={this.handleRef} />
          {this.state.ready ? (
            <StylesProvider
              jss={this.state.jss}
              sheetsManager={this.state.sheetsManager}
            >
              <CssBaseline />
              <IndexPageTemplate
                greet={greet}
                testimonials={testimonials}
              />
            </StylesProvider>
          ) : null}
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

export default IndexPagePreview;

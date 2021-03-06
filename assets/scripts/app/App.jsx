import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import MessageBar from './MessageBar'
import MenusContainer from '../menus/MenusContainer'
import StreetNameCanvas from '../streets/StreetNameCanvas'
import InfoBubble from '../info_bubble/InfoBubble'
import WelcomePanel from './WelcomePanel'
import Palette from './Palette'
import DialogRoot from '../dialogs/DialogRoot'
import StatusMessage from './StatusMessage'
import NoConnectionMessage from './NoConnectionMessage'
import Flash from './Flash'
import DebugInfo from './DebugInfo'
import Gallery from '../gallery/Gallery'
import GalleryShield from '../gallery/GalleryShield'
import BlockingError from './BlockingError'
import StreetView from './StreetView'
import DebugHoverPolygon from '../info_bubble/DebugHoverPolygon'
import PrintContainer from './PrintContainer'

class App extends React.PureComponent {
  static propTypes = {
    locale: PropTypes.object
  }

  render () {
    return (
      <React.Fragment>
        <IntlProvider
          locale={this.props.locale.locale}
          key={`3_${this.props.locale.locale}`}
          messages={this.props.locale.messages}
        >
          <React.Fragment>
            <BlockingError />
            <Gallery />
          </React.Fragment>
        </IntlProvider>
        <MessageBar />
        <div className="main-screen">
          <GalleryShield />

          <IntlProvider
            locale={this.props.locale.locale}
            key={`locale_${this.props.locale.locale}`}
            messages={this.props.locale.messages}
          >
            <MenusContainer />
          </IntlProvider>

          <StreetNameCanvas />
          <InfoBubble />
          <DebugHoverPolygon />

          <IntlProvider
            locale={this.props.locale.locale}
            key={this.props.locale.locale}
            messages={this.props.locale.messages}
          >
            <React.Fragment>
              <WelcomePanel />
              <Palette />
              <DialogRoot />
              <StatusMessage />
              <NoConnectionMessage />
            </React.Fragment>
          </IntlProvider>

          <StreetView />
        </div>

        <Flash />
        <DebugInfo />
        <PrintContainer />
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    locale: state.locale
  }
}

export default connect(mapStateToProps)(App)

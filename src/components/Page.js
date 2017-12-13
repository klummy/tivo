import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.main`
    padding: 20px 5vw 40px;
`

class Page extends React.Component {
  componentDidMount () {
    this.updatePageTitle()
  }

  componentWillReceiveProps (props) {
    this.updatePageTitle(props.title)
  }

  updatePageTitle (title) {
    const currentPageTitle = title || this.props.title
    const titleSuffix = 'Tivo'

    document.title = `${currentPageTitle} | ${titleSuffix}`
  }

  render () {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}

Page.defaultProps = {
  children: null
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]),
  title: PropTypes.string.isRequired
}

export default Page

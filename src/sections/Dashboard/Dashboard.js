import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Page } from '../../components'

const StatsCard = styled.div.attrs({
  className: 'card'
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
`

const DashboardCard = StatsCard.extend`
  min-height: 250px;
`

const dummyStatsData = [
  {
    figure: 1234,
    title: 'Sales'
  },
  {
    figure: 1234,
    title: 'Games'
  },
  {
    figure: 1234,
    title: 'Revenue'
  }
]

const dummyDashboardData = [
  {},
  {},
  {},
  {},
  {},
  {}
]

const Dashboard = () => (
  <Page title='Dashboard'>
    <Fragment>
      <div className='row'>

        {
          dummyStatsData.map(statData => (
            <div
              className='col s12 m4'
              key={dummyStatsData.indexOf(statData)}
            >
              <StatsCard>
                <span>{statData.figure}</span>
                <span>{statData.title}</span>
              </StatsCard>
            </div>
          ))
        }

      </div>

      <div className='row'>
        {
          dummyDashboardData.map((dashboardData, index) => (
            <div
              className='col s12 m4'
              key={dummyDashboardData.indexOf(dashboardData)}
            >
              <DashboardCard>
                {index + 1}
              </DashboardCard>
            </div>
          ))
        }
      </div>
    </Fragment>
  </Page>
)

export default Dashboard

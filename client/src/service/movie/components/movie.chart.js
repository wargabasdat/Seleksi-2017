import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Label, Icon, Segment, Image } from 'semantic-ui-react';
import metacritic from '../../../common/resources/metacritic.svg';
import rotten from '../../../common/resources/rotten.svg';

class CustomizedAxisTick extends React.Component {
  render () {
    const {x, y, payload} = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor='end' fill='#666' transform='rotate(0)'>{payload.value}</text>
      </g>
    );
  }
}

class CustomTooltip extends React.Component {
  render () {
    const { active } = this.props;
    if (active) {
      const { payload } = this.props;
      return (
        <Segment>
          <Label.Group>
            <Label color='teal'><Icon name='calendar' />{payload[0].payload.name || ''}</Label>
            {
                map(payload, (result, key) => (
                  <div key={key}>
                    {
                      result.dataKey === 'Internet Movie Database' &&
                      <div>
                        <Label color='black'>
                          <Icon name='imdb' color='yellow' />
                          {result.dataKey}
                          <Label.Detail>{`${result.value} / 10`}</Label.Detail>
                        </Label><br />
                      </div>
                    }
                    {
                      result.dataKey === 'Rotten Tomatoes' &&
                      result.value &&
                      <div>
                        <Label color='green' image>
                          <Image src={rotten} shape='rounded' fluid avatar />
                          {result.dataKey}
                          <Label.Detail>{`${result.value * 10}%`}</Label.Detail>
                        </Label><br />
                      </div>
                    }
                    {
                      result.dataKey === 'Metacritic' &&
                      result.value &&
                      <div>
                        <Label color='blue' image>
                          <Image src={metacritic} shape='rounded' fluid avatar />
                          {result.dataKey}
                          <Label.Detail>{`${result.value * 10} / 100`}</Label.Detail>
                        </Label><br />
                      </div>
                    }
                  </div>
                ))
              }
          </Label.Group>
        </Segment>
      );
    }

    return null;
  }
}

CustomTooltip.propTypes = {
  type: PropTypes.string,
  payload: PropTypes.array,
  label: PropTypes.string
};

const MovieChart = ({data}) => {
  return (
    <BarChart height={400} width={600} data={data} margin={{top: 5, right: 5, bottom: 5, left: 5}}>
      <XAxis dataKey='label' tick={<CustomizedAxisTick />} />
      <YAxis type='number' domain={[0, 10]} />
      <Tooltip content={<CustomTooltip />} />
      <Legend align='center' height={36} />
      <CartesianGrid strokeDasharray='3 3' />
      <ReferenceLine y={10} stroke='red' strokeDasharray='3 3' />
      <Bar dataKey='Internet Movie Database' barSize={20} fill='#000000' />
      <Bar dataKey='Rotten Tomatoes' barSize={20} fill='#016936' />
      <Bar dataKey='Metacritic' barSize={20} fill='#0E6EB8' />
    </BarChart>
  );
};

MovieChart.propTypes = {
  data: PropTypes.array.isRequired,
  month: PropTypes.string.isRequired
};

MovieChart.defaultProps = {
  data: []
};

export default MovieChart;

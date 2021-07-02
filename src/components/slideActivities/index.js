/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'
import Slider from 'react-slick'
import { Slide, DivBtn, DivTitle, DivHeader } from './style'
import CardActivities from '../cardActitivites'
import CreatModalActivi from '../newModalActivi'

const SlideActivities = ({ activities, groupId, getGroup }) => {
  useEffect(() => {}, [activities])

  const settings = {
    dots: true,
    infinite: CardActivities.length < 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrowLeft: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }

  return (
    <Slide>
      <DivHeader>
        <DivBtn></DivBtn>
        <DivTitle>
          <h2 className='title-add'>
            Activities{' '}
            <CreatModalActivi groupId={groupId} getGroup={getGroup} />
          </h2>
        </DivTitle>
      </DivHeader>
      <Slider {...settings}>
        {activities?.map((activity) => (
          <CardActivities
            getGroup={getGroup}
            key={activity.id}
            title={activity.title}
            date={activity.realization_time}
            groupId={groupId}
            activityId={activity.id}
          ></CardActivities>
        ))}
      </Slider>
    </Slide>
  )
}

export default SlideActivities

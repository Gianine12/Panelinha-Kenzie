/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick'
import CardGoals from '../cardGoals'
import Slide from './style'
import CreateGoal from '../createGoal'

const SlideGoals = ({ goals, groupId, getGroup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slide>
      <h2 className='title-add'>
        Goals <CreateGoal groupId={groupId} getGroup={getGroup} />
      </h2>
      <Slider {...settings}>
        {goals.map((goal) => (
          <div style={{ margin: '20px !important' }}>
            <CardGoals
              title={goal.title}
              difficulty={goal.difficulty}
              howMuchAchieved={goal.how_much_achieved}
              id={goal.id}
              getGroup={getGroup}
            />
          </div>
        ))}
      </Slider>
    </Slide>
  )
}

export default SlideGoals

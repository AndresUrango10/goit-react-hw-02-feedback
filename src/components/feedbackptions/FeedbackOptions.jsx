import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Button, FeedContainer } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);

    // ?Inicializar el estado con el contador de clics consecutivos en 0.
    this.state = {
      consecutiveClicks: 0,
    };
  }

  handleManyClickAlerts = () => {
    // ?Incrementa el contador de clics consecutivos
    this.setState(prevState => ({
      consecutiveClicks: prevState.consecutiveClicks + 1,
    }));

    // ?Verifica si se han dado más de 5 clics consecutivos y muestra la alerta.
    if (this.state.consecutiveClicks >= 5) {
      Swal.fire({
        title: '<strong>CUIDADO!</strong>',
        icon: 'info',
        html: 'Has dado <strong>5 comentarios seguidos</strong>.<br />¡Agradecemos tus comentarios, Pero por favor NO hagas clics innecesarios!',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
      });
      this.setState({ consecutiveClicks: 0 });
    }
  };

  render() {
    return (
      <FeedContainer>
        {Object.keys(this.props.options).map((option, index) => (
          <Button
            type="button"
            key={index}
            onClick={() => {
              this.props.leaveFeedback(option);
              this.handleManyClickAlerts(option);
              toast('GRACIAS POR TUS COMENTARIOS!', { icon: '👏' });
            }}
          >
            {option}
          </Button>
        ))}
        {/* ConfIguracion de ALERT DE TOAST */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 1500,
            style: {
              background: '#007bff',
              color: '#fff',
            },
          }}
        />
      </FeedContainer>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;

import { Component } from '@angular/core';
import { WhatsappServiceService } from '../../whatsapp-service.service';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrl: './icono.component.css'
})
export class IconoComponent {
  message: string = '';
  recipient: string = '';

  constructor(private whatsappService: WhatsappServiceService) {}

  sendMessage() {
    if (!this.message || !this.recipient) {
      alert('Por favor, ingresa un mensaje y un destinatario.');
      return;
    }

    const payload = {
      entry: [
        {
          changes: [
            {
              value: {
                messages: [
                  {
                    from: this.recipient,
                    text: { body: this.message },
                    type: 'text',
                    id: 2,
                  },
                ],
                metadata: {
                  phone_number_id: '534050106448586',
                },
              },
            },
          ],
        },
      ],
    };

    this.whatsappService.sendMessage(payload).subscribe({
      next: (response) => {
        console.log('Mensaje enviado:', response);
        alert('Mensaje enviado exitosamente.');
      },
      error: (error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje.');
      },
    });
  }
}

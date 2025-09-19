import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mkgvdvoa"
      method="POST"
      className="space-y-4"
    >
      <div>
        <Label htmlFor="name" className="mb-4">
          Nombre
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre..."
          required
        />
      </div>
      <div>
        <Label htmlFor="email" className="mb-4">
          Correo
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="nombre@correo.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="message" className="mb-4">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje..."
          required
        />
      </div>
      <Button className="mt-4" type="submit">
        Enviar
      </Button>
    </form>
  );
}

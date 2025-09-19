import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/your_form_id"
      method="POST"
      className="space-y-4"
    >
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre..."
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Correo</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="nombree@correo.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje..."
          required
        />
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Zap,
  Shield,
  Rocket,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Target,
  Smartphone,
  Globe,
  MessageSquare,
  Heart,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">SuaMarca</div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Começar Agora</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                  🚀 Novo: IA Integrada em Todos os Projetos
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforme Sua
                  <span className="text-blue-600 block">Presença Digital</span>
                  <span className="text-purple-600 block text-3xl md:text-4xl lg:text-5xl">em Resultados</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Criamos soluções digitais inovadoras que impulsionam seu negócio para o próximo nível. Design moderno,
                  performance excepcional e resultados garantidos em 30 dias.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24h</div>
                  <div className="text-sm text-gray-600">Suporte</div>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                >
                  Ver Portfólio
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">1000+</span> empresas confiam em nós
                </div>
              </div>
            </div>

            {/* Imagem Principal */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Dashboard de Analytics - Transformação Digital"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-lg"
                  priority
                />
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg">
                  <Zap className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por Que Escolher Nossa Solução?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma combinação única de tecnologia avançada, design excepcional e suporte dedicado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8 text-blue-600" />,
                title: "Performance Extrema",
                description: "Sites até 10x mais rápidos com tecnologia de ponta e otimização avançada",
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "Segurança Máxima",
                description: "Proteção completa contra ameaças com certificados SSL e monitoramento 24/7",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-purple-600" />,
                title: "Design Responsivo",
                description: "Experiência perfeita em todos os dispositivos, do mobile ao desktop",
              },
              {
                icon: <Globe className="w-8 h-8 text-indigo-600" />,
                title: "SEO Otimizado",
                description: "Apareça no topo do Google com nossa estratégia de SEO comprovada",
              },
              {
                icon: <Users className="w-8 h-8 text-pink-600" />,
                title: "Suporte Dedicado",
                description: "Equipe especializada disponível 24/7 para resolver qualquer questão",
              },
              {
                icon: <Award className="w-8 h-8 text-orange-600" />,
                title: "Garantia de Resultado",
                description: "Garantimos resultados em 30 dias ou seu dinheiro de volta",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para transformar sua presença digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Desenvolvimento Web",
                  description: "Sites e aplicações web modernas, rápidas e seguras",
                  price: "A partir de R$ 2.997",
                },
                {
                  title: "E-commerce Completo",
                  description: "Loja virtual completa com pagamentos integrados",
                  price: "A partir de R$ 4.997",
                },
                {
                  title: "Marketing Digital",
                  description: "Estratégias completas para aumentar suas vendas online",
                  price: "A partir de R$ 1.997/mês",
                },
                {
                  title: "Consultoria em IA",
                  description: "Implementação de inteligência artificial no seu negócio",
                  price: "A partir de R$ 3.997",
                },
              ].map((service, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {service.price}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" className="w-full">
                      Saiba Mais <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Serviços Digitais"
                width={500}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.9/5 (127 avaliações)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "CEO, TechStart",
                content: "Aumentamos nossas vendas em 300% após o lançamento do novo site. A equipe é excepcional!",
                avatar: "MS",
              },
              {
                name: "João Santos",
                role: "Diretor, InnovaCorp",
                content: "Profissionalismo e qualidade incomparáveis. Recomendo para qualquer empresa séria.",
                avatar: "JS",
              },
              {
                name: "Ana Costa",
                role: "Fundadora, EcoLoja",
                content: "Nossa loja online nunca funcionou tão bem. Suporte incrível e resultados garantidos!",
                avatar: "AC",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projetos Entregues", icon: <Target className="w-8 h-8" /> },
              { number: "98%", label: "Taxa de Satisfação", icon: <Heart className="w-8 h-8" /> },
              { number: "24/7", label: "Suporte Disponível", icon: <Clock className="w-8 h-8" /> },
              { number: "5 Anos", label: "No Mercado", icon: <Award className="w-8 h-8" /> },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sobre Nossa Empresa</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos uma equipe apaixonada por tecnologia e inovação, dedicada a transformar negócios através de
                soluções digitais de alta qualidade. Com mais de 5 anos de experiência no mercado, já ajudamos centenas
                de empresas a alcançar seus objetivos.
              </p>

              <div className="space-y-4">
                {[
                  "Equipe certificada e especializada",
                  "Metodologia ágil e transparente",
                  "Foco total em resultados",
                  "Suporte contínuo pós-entrega",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Conheça Nossa Equipe</Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Nossa Equipe"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Quanto tempo leva para desenvolver um site?",
                answer:
                  "O prazo varia de acordo com a complexidade do projeto. Sites simples ficam prontos em 7-14 dias, enquanto projetos mais complexos podem levar de 30-60 dias.",
              },
              {
                question: "Vocês oferecem suporte após a entrega?",
                answer:
                  "Sim! Oferecemos suporte técnico gratuito por 30 dias após a entrega, e planos de manutenção mensal para suporte contínuo.",
              },
              {
                question: "O site será responsivo para mobile?",
                answer:
                  "Absolutamente! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização em todos os dispositivos.",
              },
              {
                question: "Posso fazer alterações no site depois de pronto?",
                answer:
                  "Sim, desenvolvemos sites com painéis administrativos intuitivos para que você possa fazer alterações básicas. Para mudanças mais complexas, oferecemos suporte técnico.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-left text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pronto Para Transformar Seu Negócio?
              </h2>
              <p className="text-xl text-gray-600">
                Entre em contato conosco e receba uma proposta personalizada em até 24 horas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Solicite Sua Proposta</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6" action="#" method="POST">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                          Nome Completo *
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          placeholder="Seu nome completo"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                          Empresa
                        </Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          placeholder="Nome da empresa"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                          Telefone
                        </Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servico" className="text-sm font-medium text-gray-700">
                        Serviço de Interesse
                      </Label>
                      <select
                        id="servico"
                        name="servico"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="site">Desenvolvimento de Site</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="consultoria">Consultoria em IA</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Solicitar Proposta Gratuita
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center">* Resposta garantida em até 24 horas</p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Outras Formas de Contato</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Telefone</h4>
                        <p className="text-gray-600">(11) 99999-9999</p>
                        <p className="text-sm text-gray-500">Seg-Sex: 9h às 18h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                        <p className="text-gray-600">(11) 99999-9999</p>
                        <p className="text-sm text-gray-500">Disponível 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">E-mail</h4>
                        <p className="text-gray-600">contato@suamarca.com</p>
                        <p className="text-sm text-gray-500">Resposta em até 2h</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">🎁 Oferta Especial</h4>
                  <p className="text-gray-600 mb-4">Solicite sua proposta hoje e ganhe:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Consultoria gratuita (valor R$ 500)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Análise completa do seu negócio
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Proposta personalizada
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Fique Por Dentro das Novidades</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Receba dicas exclusivas, tendências do mercado digital e ofertas especiais diretamente no seu e-mail
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Seu melhor e-mail" className="bg-white text-gray-900 border-0" />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">Inscrever</Button>
          </div>

          <p className="text-xs text-gray-400 mt-4">Sem spam. Cancele quando quiser.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo/Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">SuaMarca</h3>
              <p className="text-gray-400 leading-relaxed">
                Transformando ideias em realidade digital desde 2019. Sua parceira de confiança para o sucesso online.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Desenvolvimento Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marketing Digital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consultoria IA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Suporte Técnico
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nossa Equipe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>contato@suamarca.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 SuaMarca. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

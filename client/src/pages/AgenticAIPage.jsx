import ServicePage from './ServicePage';
import { Brain } from 'lucide-react';

const service = {
  title: 'Agentic AI & Automation',
  subtitle: 'AI agents that work 24/7—handling inquiries, qualifying leads, and automating workflows. Build systems that scale without adding headcount.',
  icon: Brain,
  problem: 'Manual operations are killing your growth. You\'re spending hours on repetitive tasks—customer inquiries, lead qualification, data entry, follow-ups. Every hour you spend on manual work is an hour you\'re not spending on strategy, growth, or innovation. Plus, you can\'t scale without hiring more people, which increases costs and complexity.',
  solution: 'We build AI-powered automation systems that handle these tasks autonomously. Our agentic AI solutions work 24/7, engaging prospects, qualifying leads, managing workflows, and optimizing processes—all without constant human intervention.',
  solutionPoints: [
    'AI agents that handle customer inquiries and support 24/7',
    'Automated lead qualification and nurturing systems',
    'Workflow automation that eliminates manual processes',
    'Intelligent data processing and reporting',
    'Integration with your existing tools and platforms',
    'Continuous learning and optimization',
  ],
  deliverables: [
    'Custom AI agent architecture',
    'Automated workflow systems',
    'Integration with CRM, email, and marketing tools',
    'Lead qualification and scoring systems',
    'Customer support automation',
    'Data processing and reporting automation',
    'System documentation and training',
    'Ongoing optimization and support',
  ],
  tools: [
    'OpenAI GPT-4',
    'Anthropic Claude',
    'Zapier',
    'Make.com',
    'Custom APIs',
    'LangChain',
    'Vector Databases',
  ],
  whoFor: 'Businesses that are drowning in manual tasks, want to scale without adding headcount, need 24/7 customer engagement, or want to automate repetitive workflows. Perfect for service businesses, agencies, e-commerce, and SaaS companies.',
  timeline: 'Initial setup typically takes 2-4 weeks, depending on complexity. We start with a discovery phase to understand your workflows, then build and deploy the automation systems. Ongoing optimization continues as the system learns and improves.',
};

const AgenticAIPage = () => {
  return <ServicePage service={service} />;
};

export default AgenticAIPage;


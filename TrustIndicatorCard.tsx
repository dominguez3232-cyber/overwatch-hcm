import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Building2, TrendingUp, Globe } from 'lucide-react';

interface TrustCardProps {
  className?: string;
}

export function CompaniesProofCard({ className = "" }: TrustCardProps) {
  return (
    <Card className={`bg-card/50 border-border hover:border-blue-500/30 transition-all duration-300 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold text-foreground mb-1">500+</div>
        <div className="text-sm text-muted-foreground mb-3">Companies Served</div>
        <Badge variant="secondary" className="text-xs">
          Growing Fast
        </Badge>
      </CardContent>
    </Card>
  );
}

export function UsersProofCard({ className = "" }: TrustCardProps) {
  return (
    <Card className={`bg-card/50 border-border hover:border-green-500/30 transition-all duration-300 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold text-foreground mb-1">25K+</div>
        <div className="text-sm text-muted-foreground mb-3">Active Users</div>
        <Badge variant="secondary" className="text-xs">
          Highly Engaged
        </Badge>
      </CardContent>
    </Card>
  );
}

export function RevenueProofCard({ className = "" }: TrustCardProps) {
  return (
    <Card className={`bg-card/50 border-border hover:border-purple-500/30 transition-all duration-300 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold text-foreground mb-1">$2.1B+</div>
        <div className="text-sm text-muted-foreground mb-3">Revenue Managed</div>
        <Badge variant="secondary" className="text-xs">
          Enterprise Scale
        </Badge>
      </CardContent>
    </Card>
  );
}

export function LatinxProofCard({ className = "" }: TrustCardProps) {
  return (
    <Card className={`bg-card/50 border-border hover:border-orange-500/30 transition-all duration-300 ${className}`}>
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <div className="text-2xl font-bold text-foreground mb-1">67%</div>
        <div className="text-sm text-muted-foreground mb-3">Latino/Hispanic Businesses</div>
        <Badge variant="secondary" className="text-xs bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30">
          Lo Nuestro
        </Badge>
      </CardContent>
    </Card>
  );
}
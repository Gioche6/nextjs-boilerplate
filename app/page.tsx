"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Brain, BarChart3, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Enerlytix: Decision Intelligence Architecture
      </h1>

      {/* Flow Diagram */}
      <div className="grid grid-cols-5 gap-4 items-center">
        {/* Data Ingestion */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="p-4 text-center bg-blue-50 border-blue-200">
            <CardContent>
              <Database className="mx-auto mb-2 text-blue-600" size={32} />
              <h2 className="font-semibold">Data Ingestion</h2>
              <p className="text-sm text-gray-600 mt-2">
                SAP, Excel, Depot, OBC, Market Data → unified pipelines
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <ArrowRight className="mx-auto text-gray-500" size={32} />

        {/* Data Processing */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="p-4 text-center bg-indigo-50 border-indigo-200">
            <CardContent>
              <BarChart3 className="mx-auto mb-2 text-indigo-600" size={32} />
              <h2 className="font-semibold">Data Processing</h2>
              <p className="text-sm text-gray-600 mt-2">
                Cleansing, validation, feature store, data quality checks
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <ArrowRight className="mx-auto text-gray-500" size={32} />

        {/* AI & Modeling */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="p-4 text-center bg-purple-50 border-purple-200">
            <CardContent>
              <Brain className="mx-auto mb-2 text-purple-600" size={32} />
              <h2 className="font-semibold">AI Modeling</h2>
              <p className="text-sm text-gray-600 mt-2">
                Forecasting, Optimization, Profitability Prediction
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <ArrowRight className="mx-auto text-gray-500" size={32} />

        {/* Decision Layer */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="p-4 text-center bg-green-50 border-green-200">
            <CardContent>
              <FileText className="mx-auto mb-2 text-green-600" size={32} />
              <h2 className="font-semibold">Decision Layer</h2>
              <p className="text-sm text-gray-600 mt-2">
                Recommendations, Auto-Docs, What-if Simulations
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <ArrowRight className="mx-auto text-gray-500" size={32} />

        {/* Visualization */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="p-4 text-center bg-yellow-50 border-yellow-200">
            <CardContent>
              <Users className="mx-auto mb-2 text-yellow-600" size={32} />
              <h2 className="font-semibold">Visualization & Governance</h2>
              <p className="text-sm text-gray-600 mt-2">
                Dashboards, Alerts, Access Control, Feedback Loop
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-6">
        <strong>End-to-End Flow:</strong> Data → Clean → Predict → Recommend → Approve → Learn
      </p>
    </div>
  );
}
